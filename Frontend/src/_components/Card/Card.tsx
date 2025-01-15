import { MovieProps } from "@/Movies/Movies.types";

export const Card = ({ description, title, url, primaryImage }: MovieProps) => {
  return (
    <div className="card bg-base-100 image-full w-96 shadow-xl">
      <figure>
        <img src={primaryImage} srcSet={`${primaryImage} 2x`} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <a className="btn btn-primary" href={url} target="_blank">
            More info
          </a>
        </div>
      </div>
    </div>
  );
};
