# Waitlist Setup Instructions

## ✅ What's Been Implemented

- Installed `@supabase/supabase-js` package
- Created Supabase client configuration
- Built `WaitlistModal` component with:
  - Backdrop blur effect
  - Email and organization name fields
  - Form validation
  - Loading states
  - Success/error handling
- Wired up the "Join Waitlist" button in Hero component

## 🔧 Setup Steps

### 1. Add Your Supabase Credentials

Open `.env.local` and replace the placeholder values with your actual Supabase credentials:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
```

You can find these in your Supabase project dashboard under **Project Settings → API**.

### 2. Create the Database Table

In your Supabase project, go to **SQL Editor** and run this:

```sql
-- Create the waitlist table
create table waitlist (
  id uuid default gen_random_uuid() primary key,
  email text not null,
  organization_name text not null,
  created_at timestamp default now()
);

-- Enable Row Level Security
alter table waitlist enable row level security;

-- Allow anyone to insert (but not read/update/delete)
create policy "Allow public inserts"
on waitlist for insert
to anon
with check (true);
```

### 3. Restart Your Dev Server

After adding the environment variables:

```bash
npm run dev
```

## 🎉 That's It!

Click "Join Waitlist" button → Modal opens → Enter details → Data saved to Supabase!

## 📊 Viewing Submissions

- Go to your Supabase dashboard
- Click **Table Editor** → `waitlist`
- You can also export to CSV/Excel from there

## 🔒 Security Notes

- The `anon` key is safe to expose in the frontend
- RLS policy only allows inserts (no one can read other people's submissions via the frontend)
- Only you can view submissions through the Supabase dashboard
