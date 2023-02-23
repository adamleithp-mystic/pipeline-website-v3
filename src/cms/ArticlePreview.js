import MDXPreview from "./MDXPreview";

const ArticlePreview = ({ entry }) => <MDXPreview entry={entry} />;

ArticlePreview.propTypes = {
  entry: PropTypes.object.isRequired,
};

export default ArticlePreview;
