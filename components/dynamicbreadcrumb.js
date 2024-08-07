import { useRouter } from 'next/router';
import Link from 'next/link';

const DynamicBreadcrumb = () => {
  const router = useRouter();
  const { asPath } = router;

  // Split the URL path into segments
  const pathSegments = asPath.split('/').filter(segment => segment);

  // Generate the breadcrumb links
  const breadcrumbLinks = pathSegments.map((segment, index) => {
    // Create the path for each breadcrumb link
    const href = `/${pathSegments.slice(0, index + 1).join('/')}`;

    return (
      <span key={href} className="flex items-center space-x-2 text-gray-500">
        <Link href={href} legacyBehavior>
          <a className="cursor-pointer hover:text-gray-900 transition-colors duration-300 capitalize">
            {segment}
          </a>
        </Link>
        {index < pathSegments.length - 1 && (
          <span className="mx-2">/</span>
        )}
      </span>
    );
  });

  return (
    <div className="container px-5 py-2 mx-auto">
      <div className="flex items-center">
        {breadcrumbLinks}
      </div>
    </div>
  );
};

export default DynamicBreadcrumb;
