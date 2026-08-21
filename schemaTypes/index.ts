import {aboutPage} from './documents/about-page'
import {contactPage} from './documents/contact-page'
import {homePage} from './documents/home-page'
import {project} from './documents/project'
import {siteSettings} from './documents/site-settings'
import {workPage} from './documents/work-page'
import {biography} from './objects/biography'
import {contentSection} from './objects/content-section'
import {imageWithAlt} from './objects/image-with-alt'
import {link} from './objects/link'
import {localizedPortableText} from './objects/localized-portable-text'
import {localizedString} from './objects/localized-string'
import {localizedText} from './objects/localized-text'
import {seo} from './objects/seo'
import {socialLink} from './objects/social-link'

export const schemaTypes = [
  siteSettings,
  homePage,
  workPage,
  aboutPage,
  contactPage,
  project,
  localizedString,
  localizedText,
  localizedPortableText,
  link,
  socialLink,
  imageWithAlt,
  biography,
  contentSection,
  seo,
]
