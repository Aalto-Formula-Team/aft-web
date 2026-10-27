import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-vercel-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_header_cta_type" AS ENUM('reference', 'custom');
  ALTER TABLE "header" ADD COLUMN "cta_type" "enum_header_cta_type" DEFAULT 'reference';
  ALTER TABLE "header" ADD COLUMN "cta_new_tab" boolean;
  ALTER TABLE "header" ADD COLUMN "cta_url" varchar;
  ALTER TABLE "header" ADD COLUMN "cta_label" varchar NOT NULL DEFAULT 'Partner With Us';`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "header" DROP COLUMN "cta_type";
  ALTER TABLE "header" DROP COLUMN "cta_new_tab";
  ALTER TABLE "header" DROP COLUMN "cta_url";
  ALTER TABLE "header" DROP COLUMN "cta_label";
  DROP TYPE "public"."enum_header_cta_type";`)
}
