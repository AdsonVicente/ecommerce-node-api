/*
  Warnings:

  - You are about to drop the column `data_atualizacao` on the `categorias` table. All the data in the column will be lost.
  - You are about to drop the column `data_atualizacao` on the `produtos_categorias` table. All the data in the column will be lost.
  - Added the required column `data_atualizaco` to the `categorias` table without a default value. This is not possible if the table is not empty.
  - Added the required column `data_atualizaco` to the `produtos_categorias` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "StatusProdutoPrisma" AS ENUM ('ATIVO', 'DESATIVO');

-- AlterTable
ALTER TABLE "categorias" DROP COLUMN "data_atualizacao",
ADD COLUMN     "data_atualizaco" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "produtos" ADD COLUMN     "status_produto" "StatusProdutoPrisma" NOT NULL DEFAULT 'ATIVO';

-- AlterTable
ALTER TABLE "produtos_categorias" DROP COLUMN "data_atualizacao",
ADD COLUMN     "data_atualizaco" TIMESTAMP(3) NOT NULL;
