import { GetStaticPaths, GetStaticProps } from 'next';
import { getAll, getBySlug, Post } from '../../lib/markdown';
import { getSections, Section } from '../../lib/getSections';

interface PostProps {
  post: Post;
  sections: Section[];
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getAll<Post>('Blog');

  const paths = posts.map((post) => ({
    params: { slug: post.slug.split('/') },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params?.slug || !Array.isArray(params.slug)) {
    return { notFound: true };
  }

  const slug = params.slug.join('/'); // Reconstruir el slug como una ruta relativa
  const post = await getBySlug<Post>(slug);
  const sections = getSections(); // Obtener las secciones

  return {
    props: {
      post,
      sections,
    },
  };
};

export default function PostPage({ post }: PostProps) {
  return (
    <article className="prose lg:prose-xl mx-auto">
      <h1>{post.title}</h1>
      <time className="text-gray-600">{post.date}</time>
      <div dangerouslySetInnerHTML={{ __html: post?.contentHtml || '' }} />
    </article>
  );
}
