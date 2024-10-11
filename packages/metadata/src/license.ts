import { z } from 'zod';
import { Brand } from './utils';

/**
 * License Type
 */
export const LicenseType = [{
  id: 'no_rights_reserved',
  name: 'No Rights Reserved (CC0)',
  description: 'Your work is in the public domain, and anyone can use it for any purpose without restrictions',
}, {
  id: 'all_rights_reserved',
  name: 'All Rights Reserved',
  description: 'You reserve all the rights provided by copyright law, such as distribution, performance, and creation of derivative works, and no one else may use it without permission',
}, {
  id: 'cc_by',
  name: 'Creative Commons Attribution (CC-BY)',
  description: 'Anyone can distribute, remix, adapt, and build upon your work, even commercially, as long as they credit you for the original creation',
}, {
  id: 'cc_by_nc',
  name: 'Creative Commons Attribution Non-Commercial (CC-BY-NC)',
  description: 'Anyone can remix, adapt, and build upon your work non-commercially, and although their new works must also acknowledge you and be non-commercial, they don’t have to license their derivative works on the same terms',
}, {
  id: 'cc_by_nd',
  name: 'Creative Commons Attribution No Derivatives (CC-BY-ND)',
  description: 'Anyone can reuse the work for any purpose, including commercially; however, it cannot be shared with others in adapted form, and credit must be provided to you',
}, {
  id: 'cc_by_sa',
  name: 'Creative Commons Attribution Share Alike (CC-BY-SA)',
  description: 'Anyone can remix, adapt, and build upon your work even for commercial purposes, as long as they credit you and license their new creations under the identical terms',
}, {
  id: 'cc_by_nc_nd',
  name: 'Creative Commons Attribution Non-Commercial No Derivatives (CC-BY-NC-ND)',
  description: 'Anyone can download and share your work with others as long as they credit you, but they can’t change them in any way or use them commercially',
}, {
  id: 'cc_by_nc_sa',
  name: 'Creative Commons Attribution Non-Commercial Share Alike (CC-BY-NC-SA)',
  description: 'Anyone can remix, adapt, and build upon your work non-commercially, as long as they credit you and license their new creations under the identical terms',
}, {
  id: 'public_domain',
  name: 'Public Domain',
  description: 'Your work is in the public domain, and anyone can use it for any purpose without restrictions',
}];

export type License = Brand<string, 'License'>;

export function toLicense(value: string): License {
  const license = LicenseType.find(license => license.id === value || license.name === value);
  return license ? (license.name as License) : (value as License);
}

export function licenseSchema(
  description: string = 'The license of the track',
): z.ZodType<License, z.ZodTypeDef, unknown> {
  return z
    .string({ description })
    .refine(value => LicenseType.some(license => license.id === value || license.name === value), {
      message: 'Invalid license'
    })
    .transform(toLicense);
}