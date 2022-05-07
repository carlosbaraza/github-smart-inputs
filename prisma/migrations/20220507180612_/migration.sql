-- CreateTable
CREATE TABLE "Form" (
    "id" UUID NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "submitted" BOOLEAN NOT NULL DEFAULT false,
    "fields" JSON NOT NULL,

    CONSTRAINT "Form_pkey" PRIMARY KEY ("id")
);
