import { useRouter } from "next/router";
import Link from "next/link";
const CoffeeStore = () => {
  const router = useRouter();
  return (
    <div>
      Coffee Store Page at {router.query.id}
      <Link href='/'>
        <a>Back to Home</a>
      </Link>
    </div>
  );
};

export default CoffeeStore;
