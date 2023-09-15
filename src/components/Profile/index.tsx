interface IProfileProps {
  title: string;
  imageSrc: string;
  achivements: {
    title: string;
    description: string;
  }[];
}

export const Profile: React.FC<IProfileProps> = ({
  title,
  imageSrc,
  achivements,
}): JSX.Element => {
  return (
    <section className="profile">
      <h2>{title}</h2>
      <img
        className="avatar"
        src={imageSrc}
        alt={title}
        width={70}
        height={70}
      />
      <ul>
        {achivements?.map((item, index) => {
          return (
            <li key={item.title}>
              <b>{item.title}</b>
              {item.description}
            </li>
          );
        })}
      </ul>
    </section>
  );
};
