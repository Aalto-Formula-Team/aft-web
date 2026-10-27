import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-vercel-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_pages_blocks_roadmap_milestones_icon" AS ENUM('boxes', 'circuitBoard', 'waypoints', 'handshake', 'megaphone', 'landmark', 'pencilRuler', 'wrench', 'flag', 'network', 'brandBadge');
  CREATE TYPE "public"."enum__pages_v_blocks_roadmap_milestones_icon" AS ENUM('boxes', 'circuitBoard', 'waypoints', 'handshake', 'megaphone', 'landmark', 'pencilRuler', 'wrench', 'flag', 'network', 'brandBadge');
  CREATE TABLE "pages_blocks_roadmap_milestones_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE "pages_blocks_roadmap_milestones" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"phase" varchar,
  	"icon" "enum_pages_blocks_roadmap_milestones_icon",
  	"status" varchar,
  	"active" boolean DEFAULT false
  );
  
  CREATE TABLE "pages_blocks_roadmap" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"anchor_id" varchar,
  	"section_header_eyebrow" varchar,
  	"section_header_title" varchar,
  	"section_header_intro" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_roadmap_milestones_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_roadmap_milestones" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"phase" varchar,
  	"icon" "enum__pages_v_blocks_roadmap_milestones_icon",
  	"status" varchar,
  	"active" boolean DEFAULT false,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_roadmap" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"anchor_id" varchar,
  	"section_header_eyebrow" varchar,
  	"section_header_title" varchar,
  	"section_header_intro" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  ALTER TABLE "pages_blocks_roadmap_milestones_items" ADD CONSTRAINT "pages_blocks_roadmap_milestones_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_roadmap_milestones"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_roadmap_milestones" ADD CONSTRAINT "pages_blocks_roadmap_milestones_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_roadmap"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_roadmap" ADD CONSTRAINT "pages_blocks_roadmap_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_roadmap_milestones_items" ADD CONSTRAINT "_pages_v_blocks_roadmap_milestones_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_roadmap_milestones"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_roadmap_milestones" ADD CONSTRAINT "_pages_v_blocks_roadmap_milestones_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_roadmap"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_roadmap" ADD CONSTRAINT "_pages_v_blocks_roadmap_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "pages_blocks_roadmap_milestones_items_order_idx" ON "pages_blocks_roadmap_milestones_items" USING btree ("_order");
  CREATE INDEX "pages_blocks_roadmap_milestones_items_parent_id_idx" ON "pages_blocks_roadmap_milestones_items" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_roadmap_milestones_order_idx" ON "pages_blocks_roadmap_milestones" USING btree ("_order");
  CREATE INDEX "pages_blocks_roadmap_milestones_parent_id_idx" ON "pages_blocks_roadmap_milestones" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_roadmap_order_idx" ON "pages_blocks_roadmap" USING btree ("_order");
  CREATE INDEX "pages_blocks_roadmap_parent_id_idx" ON "pages_blocks_roadmap" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_roadmap_path_idx" ON "pages_blocks_roadmap" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_roadmap_milestones_items_order_idx" ON "_pages_v_blocks_roadmap_milestones_items" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_roadmap_milestones_items_parent_id_idx" ON "_pages_v_blocks_roadmap_milestones_items" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_roadmap_milestones_order_idx" ON "_pages_v_blocks_roadmap_milestones" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_roadmap_milestones_parent_id_idx" ON "_pages_v_blocks_roadmap_milestones" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_roadmap_order_idx" ON "_pages_v_blocks_roadmap" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_roadmap_parent_id_idx" ON "_pages_v_blocks_roadmap" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_roadmap_path_idx" ON "_pages_v_blocks_roadmap" USING btree ("_path");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "pages_blocks_roadmap_milestones_items" CASCADE;
  DROP TABLE "pages_blocks_roadmap_milestones" CASCADE;
  DROP TABLE "pages_blocks_roadmap" CASCADE;
  DROP TABLE "_pages_v_blocks_roadmap_milestones_items" CASCADE;
  DROP TABLE "_pages_v_blocks_roadmap_milestones" CASCADE;
  DROP TABLE "_pages_v_blocks_roadmap" CASCADE;
  DROP TYPE "public"."enum_pages_blocks_roadmap_milestones_icon";
  DROP TYPE "public"."enum__pages_v_blocks_roadmap_milestones_icon";`)
}
