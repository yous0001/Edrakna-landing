import teachersList from './teachers.json'

export interface Teacher {
  readonly id: string
  readonly name: string
  readonly role: string
  readonly subject: string
  readonly experience: string
  readonly bio: string
  readonly image: string
  readonly badge: string
  readonly rating: string
  readonly studentsCount?: string
  readonly specialties: readonly string[]
}

export const teachersData: readonly Teacher[] = teachersList

export function getFeaturedTeacher(): Teacher {
  return teachersData[0]
}
