/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Cristin-IDs consist of 1 to 8 digits.
 */
export type CristinId = string;
/**
 * Response of a GET request. Lists persons matching specified search filters, or all.
 */
export type ListOfPersons = {
  first_name?: string;
  surname?: string;
  cristin_person_id: CristinId;
  /**
   * URL for extended information about this person.
   */
  url: string;
  [k: string]: unknown;
}[];
