import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-vercel-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_pages_blocks_sponsor_value_pillars_icon" AS ENUM('boxes', 'circuitBoard', 'waypoints', 'handshake', 'megaphone', 'landmark', 'pencilRuler', 'wrench', 'flag', 'network', 'brandBadge');
  CREATE TYPE "public"."enum_pages_blocks_sponsor_value_cta_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_sponsor_value_pillars_icon" AS ENUM('boxes', 'circuitBoard', 'waypoints', 'handshake', 'megaphone', 'landmark', 'pencilRuler', 'wrench', 'flag', 'network', 'brandBadge');
  CREATE TYPE "public"."enum__pages_v_blocks_sponsor_value_cta_link_type" AS ENUM('reference', 'custom');
  CREATE TABLE "pages_blocks_sponsor_value_pillars_points" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE "pages_blocks_sponsor_value_pillars" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"icon" "enum_pages_blocks_sponsor_value_pillars_icon",
  	"body" varchar
  );
  
  CREATE TABLE "pages_blocks_sponsor_value" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"anchor_id" varchar,
  	"section_header_eyebrow" varchar,
  	"section_header_title" varchar,
  	"section_header_intro" varchar,
  	"cta_text" varchar,
  	"cta_link_type" "enum_pages_blocks_sponsor_value_cta_link_type" DEFAULT 'reference',
  	"cta_link_new_tab" boolean,
  	"cta_link_url" varchar,
  	"cta_link_label" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_sponsor_value_pillars_points" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_sponsor_value_pillars" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"icon" "enum__pages_v_blocks_sponsor_value_pillars_icon",
  	"body" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_sponsor_value" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"anchor_id" varchar,
  	"section_header_eyebrow" varchar,
  	"section_header_title" varchar,
  	"section_header_intro" varchar,
  	"cta_text" varchar,
  	"cta_link_type" "enum__pages_v_blocks_sponsor_value_cta_link_type" DEFAULT 'reference',
  	"cta_link_new_tab" boolean,
  	"cta_link_url" varchar,
  	"cta_link_label" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  ALTER TABLE "pages_blocks_sponsor_value_pillars_points" ADD CONSTRAINT "pages_blocks_sponsor_value_pillars_points_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_sponsor_value_pillars"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_sponsor_value_pillars" ADD CONSTRAINT "pages_blocks_sponsor_value_pillars_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_sponsor_value"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_sponsor_value" ADD CONSTRAINT "pages_blocks_sponsor_value_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_sponsor_value_pillars_points" ADD CONSTRAINT "_pages_v_blocks_sponsor_value_pillars_points_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_sponsor_value_pillars"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_sponsor_value_pillars" ADD CONSTRAINT "_pages_v_blocks_sponsor_value_pillars_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_sponsor_value"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_sponsor_value" ADD CONSTRAINT "_pages_v_blocks_sponsor_value_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "pages_blocks_sponsor_value_pillars_points_order_idx" ON "pages_blocks_sponsor_value_pillars_points" USING btree ("_order");
  CREATE INDEX "pages_blocks_sponsor_value_pillars_points_parent_id_idx" ON "pages_blocks_sponsor_value_pillars_points" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_sponsor_value_pillars_order_idx" ON "pages_blocks_sponsor_value_pillars" USING btree ("_order");
  CREATE INDEX "pages_blocks_sponsor_value_pillars_parent_id_idx" ON "pages_blocks_sponsor_value_pillars" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_sponsor_value_order_idx" ON "pages_blocks_sponsor_value" USING btree ("_order");
  CREATE INDEX "pages_blocks_sponsor_value_parent_id_idx" ON "pages_blocks_sponsor_value" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_sponsor_value_path_idx" ON "pages_blocks_sponsor_value" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_sponsor_value_pillars_points_order_idx" ON "_pages_v_blocks_sponsor_value_pillars_points" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_sponsor_value_pillars_points_parent_id_idx" ON "_pages_v_blocks_sponsor_value_pillars_points" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_sponsor_value_pillars_order_idx" ON "_pages_v_blocks_sponsor_value_pillars" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_sponsor_value_pillars_parent_id_idx" ON "_pages_v_blocks_sponsor_value_pillars" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_sponsor_value_order_idx" ON "_pages_v_blocks_sponsor_value" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_sponsor_value_parent_id_idx" ON "_pages_v_blocks_sponsor_value" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_sponsor_value_path_idx" ON "_pages_v_blocks_sponsor_value" USING btree ("_path");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "pages_blocks_sponsor_value_pillars_points" CASCADE;
  DROP TABLE "pages_blocks_sponsor_value_pillars" CASCADE;
  DROP TABLE "pages_blocks_sponsor_value" CASCADE;
  DROP TABLE "_pages_v_blocks_sponsor_value_pillars_points" CASCADE;
  DROP TABLE "_pages_v_blocks_sponsor_value_pillars" CASCADE;
  DROP TABLE "_pages_v_blocks_sponsor_value" CASCADE;
  DROP TYPE "public"."enum_pages_blocks_sponsor_value_pillars_icon";
  DROP TYPE "public"."enum_pages_blocks_sponsor_value_cta_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_sponsor_value_pillars_icon";
  DROP TYPE "public"."enum__pages_v_blocks_sponsor_value_cta_link_type";`)
}
