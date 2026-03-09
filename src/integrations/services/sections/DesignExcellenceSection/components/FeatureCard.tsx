export type FeatureCardProps = {
  imageUrl: string;
  imageAlt?: string;
  title: string;
  description: string;
};

export const FeatureCard = (props: FeatureCardProps) => {
  return (
    <div className="benefit-card-item-wapper">
      <div className="benefit-card-bg">
        <div className="benifit-card-content-wapper">
          <div className="benifit-card-icon-block">
            <img
              alt={props.imageAlt || ""}
              src={props.imageUrl}
              className="benifit-card-icon"
              width="50"
              height="50"
            />
          </div>
          <div className="benifit-card-text-wapper">
            <div className="text-zinc-50">
              <h3 className="heading-h4 font-redhatdisplay_variablefont_wght">
                {props.title}
              </h3>
            </div>
            <div className="text-color-secondary">
              <p className="body-base">
                {props.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
