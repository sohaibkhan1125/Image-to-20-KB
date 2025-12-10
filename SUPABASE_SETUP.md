# Supabase Migration - Setup Instructions

## ✅ Implementation Complete!

All code changes have been successfully implemented. Follow these steps to complete the setup:

## Step 1: Create Supabase Database Table

1. Go to your Supabase project dashboard: https://supabase.com/dashboard
2. Navigate to **SQL Editor** (in the left sidebar)
3. Click **New Query**
4. Copy and paste the entire contents of `supabase-setup.sql` file
5. Click **Run** to execute the SQL
6. Verify the table was created by going to **Table Editor** → `website_content`

## Step 2: Restart Development Server

The `.env` file has been created with your Supabase credentials. You need to restart the development server to load the new environment variables:

1. Stop the current `npm start` process (Ctrl+C in the terminal)
2. Run `npm start` again

## Step 3: Test the Migration

### Admin Panel Testing:
1. Navigate to `/admin` and log in
2. Go to "Contact Management" (homepage text editor)
3. Add some test content and click "Save Content"
4. Check your Supabase dashboard → Table Editor → `website_content` table
5. Verify a row with `slug = 'homepage_text'` exists with your content

### Homepage Testing:
1. Navigate to the homepage (`/`)
2. Scroll down - you should see the content you added in the admin panel
3. Try editing the content in admin panel and watch it update on the homepage

### Theme Testing:
1. Go to admin panel → "Appearance"
2. Select a different theme and click "Apply Theme"
3. Verify the theme changes across the entire website
4. Close and reopen your browser - the theme should persist (loaded from Supabase)

### Real-time Updates:
1. Open homepage in one browser window
2. Open admin panel in another window (side by side)
3. Make changes in admin panel and save
4. Watch the homepage update automatically within a few seconds

## What Was Changed

### ✅ Removed:
- All `localStorage` usage for content, themes, and maintenance mode
- All `jsonbinService.js` imports and usage

### ✅ Added:
- Supabase client configuration (`src/lib/supabaseClient.js`)
- Complete Supabase service (`src/services/supabaseService.js`)
- Environment variables (`.env` file)
- Database setup SQL (`supabase-setup.sql`)

### ✅ Updated Components:
- `ContactManagement.jsx` - Homepage text editor
- `HeroSectionManagement.jsx` - Hero section management
- `GeneralSettings.jsx` - General settings
- `BrandingManagement.jsx` - Logo and title management
- `FooterManagement.jsx` - Social media links
- `AppearanceManagement.jsx` - Theme selection
- `App.jsx` - Main app with real-time subscriptions
- `ThemeContext.jsx` - Theme provider with Supabase

## Content Slugs in Database

The following slugs are used in the `website_content` table:

- `homepage_text` - Custom homepage content from text editor
- `hero_section` - Hero section heading and description
- `branding` - Site title and logo URL
- `footer_links` - Social media links array
- `general_settings` - Site settings and maintenance mode
- `selected_theme` - Currently selected theme ID
- `theme_data` - Full theme configuration
- `maintenance_mode` - Maintenance mode status

## Troubleshooting

### If content doesn't load:
1. Check browser console for errors
2. Verify Supabase credentials in `.env` are correct
3. Ensure the database table was created successfully
4. Check that Row Level Security policies allow anonymous access

### If real-time updates don't work:
1. Verify Supabase Realtime is enabled for your project
2. Check browser console for WebSocket connection errors
3. Try refreshing the page

### If you see "Missing Supabase environment variables":
1. Ensure `.env` file exists in project root
2. Restart the development server
3. Verify environment variable names start with `REACT_APP_`

## Need Help?

If you encounter any issues, check:
1. Supabase project dashboard for API status
2. Browser console for error messages
3. Network tab for failed API requests
