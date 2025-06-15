import { z } from "zod";

export const allDataResponseSchema = z.object({
  total: z.number(),
  objectIDs: z.array(z.number()),
});

export type AllDataResponse = z.infer<typeof allDataResponseSchema>;

export const validObjectResponseSchema = z.object({
  objectID: z.number(),
  isHighlight: z.boolean(),
  accessionNumber: z.string(),
  isPublicDomain: z.boolean(),
  primaryImage: z.string(),
  primaryImageSmall: z.string(),
  additionalImages: z.array(z.string()),
  constituents: z.array(
    z.object({
      constituentID: z.number(),
      role: z.string(),
      name: z.string(),
      constituentULAN_URL: z.string(),
      constituentWikidata_URL: z.string(),
      gender: z.string(),
    })
  ),
  department: z.string(),
  objectName: z.string(),
  title: z.string(),
  culture: z.string(),
  period: z.string(),
  dynasty: z.string(),
  reign: z.string(),
  portfolio: z.string(),
  artistRole: z.string(),
  artistPrefix: z.string(),
  artistDisplayName: z.string(),
  artistDisplayBio: z.string(),
  artistSuffix: z.string(),
  artistAlphaSort: z.string(),
  artistNationality: z.string(),
  artistBeginDate: z.string(),
  artistEndDate: z.string(),
  artistGender: z.string(),
  artistWikidata_URL: z.string(),
  artistULAN_URL: z.string(),
  objectDate: z.string(),
  objectBeginDate: z.number(),
  objectEndDate: z.number(),
  medium: z.string(),
  dimensions: z.string(),
  measurements: z.array(z.object({
    elementName: z.string(),
    elementDescription: z.string().nullable(),
    elementMeasurements: z.object({
      Height: z.number().nullable(),
      Width: z.number().nullable(),
    }).nullable(),
  })),
  creditLine: z.string(),
  geographyType: z.string(),
  city: z.string(),
  state: z.string(),
  county: z.string(),
  country: z.string(),
  region: z.string(),
  subregion: z.string(),
  locale: z.string(),
  locus: z.string(),
  excavation: z.string(),
  river: z.string(),
  classification: z.string(),
  rightsAndReproduction: z.string(),
  linkResource: z.string(),
  metadataDate: z.string(),
  repository: z.string(),
  objectURL: z.string(),
  tags: z.array(z.object({
    term: z.string(),
    AAT_URL: z.string(),
    Wikidata_URL: z.string(),
  })).nullable(),
  objectWikidata_URL: z.string(),
  isTimelineWork: z.boolean(),
  galleryNumber: z.string(),
});

export type ValidObjectResponse = z.infer<typeof validObjectResponseSchema>;