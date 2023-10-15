type Page<TProps = {}> = React.FC<TProps>;

type Layout<TProps = {}> = React.FC<
  TProps & {
    children: Children;
  }
>;

type Icon = React.ForwardRefExoticComponent<
  Omit<React.SVGProps<SVGSVGElement>, "ref"> & {
    title?: string | undefined;
    titleId?: string | undefined;
  } & React.RefAttributes<SVGSVGElement>
>;
