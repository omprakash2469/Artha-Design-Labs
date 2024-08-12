export default function BlogDetailPage({ params }) {
  return <div className="py-10 mt-20 container">{params.blog_slug}</div>;
}
