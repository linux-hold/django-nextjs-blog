import Image from "next/image";
import Link from "next/link";
import Head from "next/head";


const Category = ({ categories }) => {
  return (
    <>
      <Head>
        <title>Category</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section>
        <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-24 max-w-screen-2xll">
          <div className="pb-5 border-b border-black">
            <h3 className="text-lg font-medium leading-6 text-neutral-600">
              Category
            </h3>
          </div>

          <div className="relative mx-auto max-w-7xl">
            <div className="grid max-w-lg gap-12 mx-auto mt-12 lg:grid-cols-3 lg:max-w-none">
              {categories.map((post) => (
                <Link
                  key={post.slug}
                  href={`category/${encodeURIComponent(post.slug)}`}
                >
                  <div className="flex flex-col mb-12 overflow-hidden cursor-pointer">
                    
                      <div className="flex-shrink-0">
                        <Image
                          src={post.image}
                          alt={post.imageAlt}
                          height="200"
                          width={300}
                          className="object-cover rounded-lg"
                        />
                      </div>
                    
                    <div className="flex flex-col justify-between flex-1">
                      <div className="flex-1">
                        <div className="block mt-2 space-y-6">
                          <h3 className="text-2xl font-semibold leading-none tracking-tighter text-neutral-600">
                            {post.name}
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export async function getServerSideProps() {
  const res = await fetch("https://infoholdbackend.herokuapp.com/api/category");
  const categories = await res.json();

  return {
    props: {
      categories,
    },
  };
}

export default Category;
