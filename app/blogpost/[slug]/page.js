import styles from './page.module.css'

export default async function Page({ params }) {
  const { slug } = await params

  return (
    <main className={styles.page}>
      <article className={styles.article}>

        {/* Category */}
        <span className={styles.category}>
          Technology
        </span>

        {/* Blog Title */}
        <h1 className={styles.title}>
          {slug}
        </h1>

        {/* Blog Meta */}
        <div className={styles.meta}>
          <span>By Admin</span>
          <span>•</span>
          <span>September 6, 2026</span>
          <span>•</span>
          <span>5 min read</span>
        </div>

        {/* Featured Image */}
        <div className={styles.imageContainer}>
          <div className={styles.imagePlaceholder}>
            Blog Image
          </div>
        </div>

        {/* Blog Content */}
        <div className={styles.content}>
          <p>
            Welcome to this blog post. This is where the main content
            of your article will appear.
          </p>

          <p>
            You can add paragraphs, headings, images, lists and other
            content here to create a complete blog article.
          </p>

          <h2>Introduction</h2>

          <p>
            This section contains more information about the topic.
            You can replace this content with data coming from your
            Strapi API.
          </p>

          <h2>What You Will Learn</h2>

          <ul>
            <li>Understanding the main concepts</li>
            <li>Working with modern technologies</li>
            <li>Building a complete application</li>
          </ul>

          <blockquote>
            “Good software is built with simplicity, clarity and
            maintainability in mind.”
          </blockquote>

          <h2>Conclusion</h2>

          <p>
            Thanks for reading this article. More interesting articles
            are coming soon.
          </p>
        </div>

      </article>
    </main>
  )
}