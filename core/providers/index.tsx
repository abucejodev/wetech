import ConvexProvider from "./convex";
import DesignProvider from "./design";

type Props = { children: React.ReactNode };

const Poviders = async ({ children }: Props) => {
  return (
    <ConvexProvider>
      <DesignProvider>{children}</DesignProvider>
    </ConvexProvider>
  );
};

export default Poviders;
