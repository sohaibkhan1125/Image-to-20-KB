-- ========================================
-- SUPABASE DATABASE SETUP - SIMPLIFIED
-- ========================================
-- Run this SQL in your Supabase SQL Editor

-- Step 1: Create the table
CREATE TABLE IF NOT EXISTS website_content (
  id BIGSERIAL PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  content TEXT,
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Step 2: Create index for faster queries
CREATE INDEX IF NOT EXISTS idx_website_content_slug ON website_content(slug);

-- Step 3: Enable Row Level Security
ALTER TABLE website_content ENABLE ROW LEVEL SECURITY;

-- Step 4: Drop existing policies if they exist
DROP POLICY IF EXISTS "public_select" ON website_content;
DROP POLICY IF EXISTS "public_update" ON website_content;
DROP POLICY IF EXISTS "public_insert" ON website_content;

-- Step 5: Create SELECT policy (allows anyone to read)
CREATE POLICY "public_select"
  ON website_content
  FOR SELECT
  TO public
  USING (true);

-- Step 6: Create UPDATE policy (allows anyone to update)
CREATE POLICY "public_update"
  ON website_content
  FOR UPDATE
  TO public
  USING (true)
  WITH CHECK (true);

-- Step 7: Create INSERT policy (allows anyone to insert)
CREATE POLICY "public_insert"
  ON website_content
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Step 8: Create auto-update trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Step 9: Drop existing trigger if it exists
DROP TRIGGER IF EXISTS update_website_content_updated_at ON website_content;

-- Step 10: Create trigger
CREATE TRIGGER update_website_content_updated_at
  BEFORE UPDATE ON website_content
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- ========================================
-- INSERT INITIAL DATA
-- ========================================

-- Homepage text (empty by default)
INSERT INTO website_content (slug, content)
VALUES ('homepage_text', '')
ON CONFLICT (slug) DO NOTHING;

-- Hero section
INSERT INTO website_content (slug, content)
VALUES ('hero_section', '{"heading":"Compress Images to Any Size","description":"Reduce your image file sizes while maintaining quality. Upload any image and compress it to your exact target size in KB."}')
ON CONFLICT (slug) DO NOTHING;

-- Branding
INSERT INTO website_content (slug, content)
VALUES ('branding', '{"siteTitle":"Image Compress","logoUrl":""}')
ON CONFLICT (slug) DO NOTHING;

-- Footer links
INSERT INTO website_content (slug, content)
VALUES ('footer_links', '{"links":[]}')
ON CONFLICT (slug) DO NOTHING;

-- General settings
INSERT INTO website_content (slug, content)
VALUES ('general_settings', '{"siteName":"Image Compressor","maxFileSize":50,"maintenanceMode":false}')
ON CONFLICT (slug) DO NOTHING;

-- Selected theme
INSERT INTO website_content (slug, content)
VALUES ('selected_theme', 'default')
ON CONFLICT (slug) DO NOTHING;

-- Theme data
INSERT INTO website_content (slug, content)
VALUES ('theme_data', '{"id":"default","name":"Default Blue","colors":{"primary":"#3B82F6","secondary":"#1E40AF","accent":"#60A5FA","background":"#F8FAFC","surface":"#FFFFFF","text":"#1F2937","textSecondary":"#6B7280","border":"#E5E7EB","success":"#10B981","warning":"#F59E0B","error":"#EF4444"}}')
ON CONFLICT (slug) DO NOTHING;

-- Maintenance mode
INSERT INTO website_content (slug, content)
VALUES ('maintenance_mode', '{"enabled":false}')
ON CONFLICT (slug) DO NOTHING;

-- ========================================
-- VERIFY SETUP
-- ========================================
-- Run this to verify everything was created correctly
SELECT * FROM website_content ORDER BY slug;
