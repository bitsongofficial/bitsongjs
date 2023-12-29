import { z } from 'zod';

/**
 * License Type
 */
export enum LicenseType {
  /**
   * No Rights Reserved
   * 
   * Your work is in the public domain, and anyone can use it for any purpose without restrictions
   */
  NO_RIGHTS_RESERVED = 'No Rights Reserved (CC0)',
  /**
   * All Rights Reserved
   * 
   * You reserve all the rights provided by copyright law, such as distribution, performance, and creation of derivative works, and no one else may use it without permission
   */
  ALL_RIGHTS_RESERVED = 'All Rights Reserved',
  /**
   * Creative Commons Attribution (CC-BY)
   * 
   * Anyone can distribute, remix, adapt, and build upon your work, even commercially, as long as they credit you for the original creation
   */
  CC_BY = 'Creative Commons Attribution (CC-BY)',
  /**
   * Creative Commons Attribution Non-Commercial (CC-BY-NC)
   * 
   * Anyone can remix, adapt, and build upon your work non-commercially, and although their new works must also acknowledge you and be non-commercial, they don’t have to license their derivative works on the same terms
   */
  CC_BY_NC = 'Creative Commons Attribution Non-Commercial (CC-BY-NC)',
  /**
   * Creative Commons Attribution No Derivatives (CC-BY-ND)
   * 
   * Anyone can reuse the work for any purpose, including commercially; however, it cannot be shared with others in adapted form, and credit must be provided to you
   */
  CC_BY_ND = 'Creative Commons Attribution No Derivatives (CC-BY-ND)',
  /**
   * Creative Commons Attribution Share Alike (CC-BY-SA)
   * 
   * Anyone can remix, adapt, and build upon your work even for commercial purposes, as long as they credit you and license their new creations under the identical terms
   */
  CC_BY_SA = 'Creative Commons Attribution Share Alike (CC-BY-SA)',
  /**
   * Creative Commons Attribution Non-Commercial No Derivatives (CC-BY-NC-ND)
   * 
   * Anyone can download and share your work with others as long as they credit you, but they can’t change them in any way or use them commercially
   */
  CC_BY_NC_ND = 'Creative Commons Attribution Non-Commercial No Derivatives (CC-BY-NC-ND)',
  /**
   * Creative Commons Attribution Non-Commercial Share Alike (CC-BY-NC-SA)
   * 
   * Anyone can remix, adapt, and build upon your work non-commercially, as long as they credit you and license their new creations under the identical terms
   */
  CC_BY_NC_SA = 'Creative Commons Attribution Non-Commercial Share Alike (CC-BY-NC-SA)',
}

/**
 * @internal
 */
export const LicenseTypeSchema = z.nativeEnum(LicenseType);