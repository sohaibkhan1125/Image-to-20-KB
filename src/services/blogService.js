import {
    collection,
    addDoc,
    updateDoc,
    deleteDoc,
    doc,
    getDocs,
    query,
    where,
    orderBy,
    serverTimestamp
} from 'firebase/firestore';
import { db } from '../firebase';

const BLOG_COLLECTION = 'blogs';

/**
 * Get all published blogs ordered by creation date
 */
export const getPublishedBlogs = async () => {
    try {
        const q = query(
            collection(db, BLOG_COLLECTION),
            where('published', '==', true)
        );
        const querySnapshot = await getDocs(q);
        const blogs = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
            createdAt: doc.data().createdAt?.toDate()?.toISOString() || new Date().toISOString()
        }));

        // Sort in memory to avoid composite index requirement
        return blogs.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    } catch (error) {
        console.error('Error fetching published blogs:', error);
        throw error;
    }
};

/**
 * Get all blogs (for admin)
 */
export const getAllBlogs = async () => {
    try {
        const q = query(
            collection(db, BLOG_COLLECTION),
            orderBy('updatedAt', 'desc')
        );
        const querySnapshot = await getDocs(q);
        return querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
            createdAt: doc.data().createdAt?.toDate()?.toISOString(),
            updatedAt: doc.data().updatedAt?.toDate()?.toISOString()
        }));
    } catch (error) {
        console.error('Error fetching all blogs:', error);
        throw error;
    }
};

/**
 * Get a single blog by its slug
 */
export const getBlogBySlug = async (slug) => {
    try {
        const q = query(
            collection(db, BLOG_COLLECTION),
            where('slug', '==', slug),
            where('published', '==', true)
        );
        const querySnapshot = await getDocs(q);
        if (querySnapshot.empty) return null;

        const blogDoc = querySnapshot.docs[0];
        return {
            id: blogDoc.id,
            ...blogDoc.data(),
            createdAt: blogDoc.data().createdAt?.toDate()?.toISOString()
        };
    } catch (error) {
        console.error('Error fetching blog by slug:', error);
        throw error;
    }
};

/**
 * Create a new blog post
 */
export const createBlog = async (blogData) => {
    try {
        const docRef = await addDoc(collection(db, BLOG_COLLECTION), {
            ...blogData,
            createdAt: serverTimestamp(),
            updatedAt: serverTimestamp()
        });
        return docRef.id;
    } catch (error) {
        console.error('Error creating blog:', error);
        throw error;
    }
};

/**
 * Update an existing blog post
 */
export const updateBlog = async (id, blogData) => {
    try {
        const blogRef = doc(db, BLOG_COLLECTION, id);
        await updateDoc(blogRef, {
            ...blogData,
            updatedAt: serverTimestamp()
        });
        return true;
    } catch (error) {
        console.error('Error updating blog:', error);
        throw error;
    }
};

/**
 * Delete a blog post
 */
export const deleteBlog = async (id) => {
    try {
        await deleteDoc(doc(db, BLOG_COLLECTION, id));
        return true;
    } catch (error) {
        console.error('Error deleting blog:', error);
        throw error;
    }
};
