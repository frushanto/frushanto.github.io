import { defineCollection, z } from 'astro:content';

const socialLinksSchema = z.object({
  email: z.string().email(),
  linkedin: z.string().url(),
  github: z.string().url(),
  twitter: z.string().url().optional(),
});

const projectSchema = z.object({
  name: z.string(),
  description: z.string(),
  link: z.string().url().optional(),
  skills: z.array(z.string()),
});

const experienceSchema = z.object({
  company: z.string(),
  title: z.string(),
  dateRange: z.string(),
  bullets: z.array(z.string()),
});

const educationSchema = z.object({
  school: z.string(),
  degree: z.string(),
  dateRange: z.string(),
  achievements: z.array(z.string()).default([]),
});

const languageSchema = z.object({
  name: z.string(),
  proficiency: z.string(),
});

const siteCollection = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    title: z.string(),
    titleDisplay: z.string().optional(),
    description: z.string(),
    aboutMe: z.string(),
    accentColor: z.string().regex(/^#(?:[0-9a-fA-F]{3}){1,2}$/),
    social: socialLinksSchema,
    skills: z.array(z.string()),
    languages: z.array(languageSchema),
    projects: z.array(projectSchema),
    experience: z.array(experienceSchema),
    education: z.array(educationSchema),
    hobbies: z.array(z.string()),
  }),
});

export const collections = {
  site: siteCollection,
};
