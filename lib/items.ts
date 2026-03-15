'use server'

import { prisma } from '@/lib/prisma'
import { revalidatePath } from 'next/cache'

export async function getItems() {
  return prisma.item.findMany({
    orderBy: { createdAt: 'desc' },
  })
}

export async function createItem(formData: FormData) {
  const title = formData.get('title') as string
  const content = formData.get('content') as string

  if (!title?.trim()) return

  await prisma.item.create({
    data: {
      title: title.trim(),
      content: content?.trim() || null,
    },
  })

  revalidatePath('/')
}

export async function deleteItem(id: number) {
  await prisma.item.delete({ where: { id } })
  revalidatePath('/')
}