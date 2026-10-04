create extension if not exists pgcrypto;

create table if not exists public.categories (
 id uuid primary key default gen_random_uuid(), name text unique not null, image_url text,
 is_active boolean not null default true, sort_order int not null default 0, created_at timestamptz default now()
);
create table if not exists public.products (
 id uuid primary key default gen_random_uuid(), name text not null, description text,
 price numeric(12,2) not null default 0, sale_price numeric(12,2),
 category_id uuid references public.categories(id) on delete set null,
 is_featured boolean not null default false, is_new_arrival boolean not null default false,
 is_active boolean not null default true, created_at timestamptz default now(), updated_at timestamptz default now()
);
create table if not exists public.product_images (
 id uuid primary key default gen_random_uuid(), product_id uuid not null references public.products(id) on delete cascade,
 image_url text not null, sort_order int not null default 0
);
create table if not exists public.product_variants (
 id uuid primary key default gen_random_uuid(), product_id uuid not null references public.products(id) on delete cascade,
 size text, color text, stock int not null default 0 check(stock>=0)
);
create table if not exists public.banners (
 id uuid primary key default gen_random_uuid(), image_url text not null, heading text, subheading text,
 button_text text default 'SHOP NOW', button_link text default '/shop',
 is_active boolean default true, sort_order int default 0
);
create table if not exists public.store_settings (
 id int primary key default 1, store_name text default 'Inthi', whatsapp text default '', phone text default '',
 instagram text default '', email text default '', address text default '', maps_url text default '',
 opening_hours text default '', logo_url text default '',
 whatsapp_template text default 'Hello {{store_name}} 👋\n\nI would like to order:\n\n{{products}}\n\nTotal: ₹{{total}}\nOrder Reference: {{order_reference}}\n\nPlease confirm availability.'
);
create table if not exists public.admins (user_id uuid primary key references auth.users(id) on delete cascade);

alter table public.categories enable row level security;
alter table public.products enable row level security;
alter table public.product_images enable row level security;
alter table public.product_variants enable row level security;
alter table public.banners enable row level security;
alter table public.store_settings enable row level security;
alter table public.admins enable row level security;

create or replace function public.is_admin() returns boolean language sql stable security definer set search_path=public
as $$ select exists(select 1 from public.admins where user_id=auth.uid()); $$;

create policy "public categories" on public.categories for select using(is_active=true);
create policy "admin categories" on public.categories for all using(public.is_admin()) with check(public.is_admin());
create policy "public products" on public.products for select using(is_active=true);
create policy "admin products" on public.products for all using(public.is_admin()) with check(public.is_admin());
create policy "public images" on public.product_images for select using(exists(select 1 from public.products p where p.id=product_id and p.is_active=true));
create policy "admin images" on public.product_images for all using(public.is_admin()) with check(public.is_admin());
create policy "public variants" on public.product_variants for select using(exists(select 1 from public.products p where p.id=product_id and p.is_active=true));
create policy "admin variants" on public.product_variants for all using(public.is_admin()) with check(public.is_admin());
create policy "public banners" on public.banners for select using(is_active=true);
create policy "admin banners" on public.banners for all using(public.is_admin()) with check(public.is_admin());
create policy "public settings" on public.store_settings for select using(true);
create policy "admin settings" on public.store_settings for all using(public.is_admin()) with check(public.is_admin());
create policy "admin self" on public.admins for select using(auth.uid()=user_id or public.is_admin());

insert into public.store_settings(id,store_name) values(1,'Inthi') on conflict(id) do nothing;
insert into public.categories(name,sort_order) values('Sarees',1),('Kurtis',2),('Dresses',3),('Lehengas',4) on conflict(name) do nothing;

-- After creating the owner in Supabase Auth, add their UUID:
-- insert into public.admins(user_id) values('YOUR-AUTH-USER-UUID');
