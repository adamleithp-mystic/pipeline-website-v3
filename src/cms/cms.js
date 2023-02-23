import CMS from "netlify-cms";

import { ArticlePreview } from "./ArticlePreview";

CMS.registerPreviewTemplate("posts", withEmotion(ArticlePreview));
