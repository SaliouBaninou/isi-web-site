-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'ADMIN', 'SUPER_ADMIN');

-- CreateEnum
CREATE TYPE "FormationCategory" AS ENUM ('SCIENTIFIQUE', 'LITTERAIRE');

-- CreateEnum
CREATE TYPE "TypeDemande" AS ENUM ('PREINSCRIPTION', 'INSCRIPTION');

-- CreateEnum
CREATE TYPE "StatutDemande" AS ENUM ('EN_ATTENTE', 'ACCEPTEE', 'REJETEE');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "password" TEXT,
    "name" VARCHAR(100) NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'USER',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Article" (
    "id" TEXT NOT NULL,
    "title" VARCHAR(250) NOT NULL,
    "description" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "note" INTEGER,
    "publishedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "authorId" TEXT NOT NULL,

    CONSTRAINT "Article_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Formation" (
    "id" TEXT NOT NULL,
    "title" VARCHAR(250) NOT NULL,
    "description" TEXT NOT NULL,
    "category" "FormationCategory" NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Formation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Preinscription" (
    "id" TEXT NOT NULL,
    "nom" VARCHAR(100) NOT NULL,
    "prenom" VARCHAR(100) NOT NULL,
    "dateNaissance" TIMESTAMP(3) NOT NULL,
    "lieuNaissance" VARCHAR(150) NOT NULL,
    "genre" VARCHAR(10) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "telephone" VARCHAR(30) NOT NULL,
    "adresse" TEXT NOT NULL,
    "serieBac" TEXT NOT NULL,
    "formationId" TEXT NOT NULL,
    "typeDemande" "TypeDemande" NOT NULL,
    "statut" "StatutDemande" NOT NULL DEFAULT 'EN_ATTENTE',
    "nomGeniteur" TEXT NOT NULL,
    "prenomGeniteur" TEXT NOT NULL,
    "emailGeniteur" VARCHAR(255) NOT NULL,
    "professionGeniteur" TEXT NOT NULL,
    "telephoneGeniteur" VARCHAR(30) NOT NULL,
    "nomGenitrice" TEXT NOT NULL,
    "prenomGenitrice" TEXT NOT NULL,
    "emailGenitrice" VARCHAR(255) NOT NULL,
    "professionGenitrice" TEXT NOT NULL,
    "telephoneGenitrice" VARCHAR(30) NOT NULL,
    "nomGarant" TEXT NOT NULL,
    "prenomGarant" TEXT NOT NULL,
    "emailGarant" VARCHAR(255) NOT NULL,
    "professionGarant" TEXT NOT NULL,
    "telephoneGarant" VARCHAR(30) NOT NULL,
    "boursier" BOOLEAN NOT NULL,
    "acteNaissance" TEXT NOT NULL,
    "demiCartePhoto" TEXT NOT NULL,
    "carteIdentite" TEXT NOT NULL,
    "attestationScolarite" TEXT NOT NULL,
    "bulletinsTerminale" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Preinscription_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DemandeEmploi" (
    "id" TEXT NOT NULL,
    "nom" VARCHAR(100) NOT NULL,
    "prenom" VARCHAR(100) NOT NULL,
    "dateNaissance" TIMESTAMP(3) NOT NULL,
    "lieuNaissance" VARCHAR(150) NOT NULL,
    "genre" VARCHAR(10) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "telephone" VARCHAR(30) NOT NULL,
    "adresse" TEXT NOT NULL,
    "acteNaissance" TEXT NOT NULL,
    "demiCartePhoto" TEXT NOT NULL,
    "passport" TEXT NOT NULL,
    "diplome" TEXT NOT NULL,
    "cv" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DemandeEmploi_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Article" ADD CONSTRAINT "Article_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Preinscription" ADD CONSTRAINT "Preinscription_formationId_fkey" FOREIGN KEY ("formationId") REFERENCES "Formation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
