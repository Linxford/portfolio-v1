-- Create contents table for managing frontend content
create table public.contents (
    id uuid default gen_random_uuid() primary key,
    section text not null,
    key text not null,
    value text not null,
    type text not null default 'text',
    created_at timestamp with time zone default timezone('utc'::text, now()) not null,
    updated_at timestamp with time zone default timezone('utc'::text, now()) not null,
    unique(section, key)
);

-- Enable Row Level Security (RLS)
alter table public.contents enable row level security;

-- Create policies
create policy "Public read access"
on public.contents for select
to public
using (true);

create policy "Admin full access"
on public.contents for all
to authenticated
using (true)
with check (true);

-- Create trigger for updated_at
create trigger set_updated_at
    before update on public.contents
    for each row
    execute function public.handle_updated_at();

-- Insert initial content
insert into public.contents (section, key, value, type) values
-- Hero section
('hero', 'title', 'Flutter Developer', 'text'),
('hero', 'subtitle', 'Building Beautiful Apps', 'text'),
('hero', 'description', 'Crafting exceptional mobile experiences with Flutter. Specialized in creating beautiful, responsive, and performant applications that users love.', 'textarea'),
('hero', 'cta_primary', 'View Projects', 'text'),
('hero', 'cta_secondary', 'Download CV', 'text'),
('hero', 'stats', '[{"label":"Apps Developed","value":"20+"},{"label":"Clean Architecture","value":"Yes"},{"label":"UI/UX Focused","value":"Yes"}]', 'json'),

-- About section
('about', 'title', 'About Me', 'text'),
('about', 'description', 'Passionate Flutter developer with a keen eye for design and a commitment to creating exceptional mobile experiences.', 'textarea'),
('about', 'image_url', 'https://images.unsplash.com/photo-1544256718-3bcf237f3974', 'url'),

-- Contact section
('contact', 'title', 'Get In Touch', 'text'),
('contact', 'description', 'Have a project in mind? Let''s discuss how we can work together to create something amazing.', 'textarea'),
('contact', 'email', 'hello@flutterdev.com', 'text'),
('contact', 'phone', '+1 (555) 123-4567', 'text'),
('contact', 'location', 'San Francisco, CA', 'text'),
('contact', 'social_links', '[{"platform":"github","url":"https://github.com/linxford"},{"platform":"linkedin","url":"https://linkedin.com/in/linxford"},{"platform":"twitter","url":"https://twitter.com/linxford"}]', 'json');