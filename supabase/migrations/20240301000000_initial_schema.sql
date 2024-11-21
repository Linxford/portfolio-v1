-- Create tables for the portfolio CMS
create table public.projects (
    id uuid default gen_random_uuid() primary key,
    title text not null,
    description text,
    image_url text,
    github_url text,
    live_url text,
    technologies text[],
    status text default 'draft',
    created_at timestamp with time zone default timezone('utc'::text, now()) not null,
    updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

create table public.services (
    id uuid default gen_random_uuid() primary key,
    title text not null,
    description text,
    icon text not null,
    color text not null,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null,
    updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

create table public.reviews (
    id uuid default gen_random_uuid() primary key,
    name text not null,
    role text,
    content text not null,
    rating integer not null check (rating >= 1 and rating <= 5),
    image_url text,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null,
    updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable Row Level Security (RLS)
alter table public.projects enable row level security;
alter table public.services enable row level security;
alter table public.reviews enable row level security;

-- Create policies
create policy "Public read access"
on public.projects for select
to public
using (true);

create policy "Admin full access"
on public.projects for all
to authenticated
using (true)
with check (true);

create policy "Public read access"
on public.services for select
to public
using (true);

create policy "Admin full access"
on public.services for all
to authenticated
using (true)
with check (true);

create policy "Public read access"
on public.reviews for select
to public
using (true);

create policy "Admin full access"
on public.reviews for all
to authenticated
using (true)
with check (true);

-- Create functions to handle timestamps
create or replace function public.handle_updated_at()
returns trigger as $$
begin
    new.updated_at = timezone('utc'::text, now());
    return new;
end;
$$ language plpgsql;

-- Create triggers for updated_at
create trigger set_updated_at
    before update on public.projects
    for each row
    execute function public.handle_updated_at();

create trigger set_updated_at
    before update on public.services
    for each row
    execute function public.handle_updated_at();

create trigger set_updated_at
    before update on public.reviews
    for each row
    execute function public.handle_updated_at();