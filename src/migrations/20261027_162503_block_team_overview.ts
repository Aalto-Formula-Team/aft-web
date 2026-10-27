import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-vercel-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_pages_blocks_team_overview_sub_teams_icon" AS ENUM('boxes', 'circuitBoard', 'waypoints', 'handshake', 'megaphone', 'landmark', 'pencilRuler', 'wrench', 'flag', 'network', 'brandBadge');
  CREATE TYPE "public"."enum__pages_v_blocks_team_overview_sub_teams_icon" AS ENUM('boxes', 'circuitBoard', 'waypoints', 'handshake', 'megaphone', 'landmark', 'pencilRuler', 'wrench', 'flag', 'network', 'brandBadge');
  CREATE TABLE "pages_blocks_team_overview_sub_teams" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"icon" "enum_pages_blocks_team_overview_sub_teams_icon",
  	"description" varchar
  );
  
  CREATE TABLE "pages_blocks_team_overview" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"anchor_id" varchar,
  	"section_header_eyebrow" varchar,
  	"section_header_title" varchar,
  	"section_header_intro" varchar,
  	"board_title" varchar,
  	"board_description" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_team_overview_sub_teams" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"icon" "enum__pages_v_blocks_team_overview_sub_teams_icon",
  	"description" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_team_overview" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"anchor_id" varchar,
  	"section_header_eyebrow" varchar,
  	"section_header_title" varchar,
  	"section_header_intro" varchar,
  	"board_title" varchar,
  	"board_description" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  ALTER TABLE "pages_rels" ADD COLUMN "media_id" integer;
  ALTER TABLE "_pages_v_rels" ADD COLUMN "media_id" integer;
  ALTER TABLE "pages_blocks_team_overview_sub_teams" ADD CONSTRAINT "pages_blocks_team_overview_sub_teams_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_team_overview"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_team_overview" ADD CONSTRAINT "pages_blocks_team_overview_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_team_overview_sub_teams" ADD CONSTRAINT "_pages_v_blocks_team_overview_sub_teams_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_team_overview"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_team_overview" ADD CONSTRAINT "_pages_v_blocks_team_overview_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "pages_blocks_team_overview_sub_teams_order_idx" ON "pages_blocks_team_overview_sub_teams" USING btree ("_order");
  CREATE INDEX "pages_blocks_team_overview_sub_teams_parent_id_idx" ON "pages_blocks_team_overview_sub_teams" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_team_overview_order_idx" ON "pages_blocks_team_overview" USING btree ("_order");
  CREATE INDEX "pages_blocks_team_overview_parent_id_idx" ON "pages_blocks_team_overview" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_team_overview_path_idx" ON "pages_blocks_team_overview" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_team_overview_sub_teams_order_idx" ON "_pages_v_blocks_team_overview_sub_teams" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_team_overview_sub_teams_parent_id_idx" ON "_pages_v_blocks_team_overview_sub_teams" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_team_overview_order_idx" ON "_pages_v_blocks_team_overview" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_team_overview_parent_id_idx" ON "_pages_v_blocks_team_overview" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_team_overview_path_idx" ON "_pages_v_blocks_team_overview" USING btree ("_path");
  ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "pages_rels_media_id_idx" ON "pages_rels" USING btree ("media_id");
  CREATE INDEX "_pages_v_rels_media_id_idx" ON "_pages_v_rels" USING btree ("media_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages_blocks_team_overview_sub_teams" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_team_overview" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_team_overview_sub_teams" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_team_overview" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "pages_blocks_team_overview_sub_teams" CASCADE;
  DROP TABLE "pages_blocks_team_overview" CASCADE;
  DROP TABLE "_pages_v_blocks_team_overview_sub_teams" CASCADE;
  DROP TABLE "_pages_v_blocks_team_overview" CASCADE;
  ALTER TABLE "pages_rels" DROP CONSTRAINT "pages_rels_media_fk";
  
  ALTER TABLE "_pages_v_rels" DROP CONSTRAINT "_pages_v_rels_media_fk";
  
  DROP INDEX "pages_rels_media_id_idx";
  DROP INDEX "_pages_v_rels_media_id_idx";
  ALTER TABLE "pages_rels" DROP COLUMN "media_id";
  ALTER TABLE "_pages_v_rels" DROP COLUMN "media_id";
  DROP TYPE "public"."enum_pages_blocks_team_overview_sub_teams_icon";
  DROP TYPE "public"."enum__pages_v_blocks_team_overview_sub_teams_icon";`)
}
