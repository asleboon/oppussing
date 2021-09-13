import React from "react";
import { SpoonKnife as SpoonKnifeIcon } from "@styled-icons/icomoon/SpoonKnife";
import { ArticleCard, ArticleCardContainer } from "../components/ArticleCard";

const Kitchen: React.FC = () => {
	return (
		<ArticleCardContainer>
			<ArticleCard
				icon={<SpoonKnifeIcon size={20} />}
				label="Oppussing av kjøkken"
				description="Se før og etter bilder av kjøkkenet!"
			/>
			<ArticleCard
				icon={<SpoonKnifeIcon size={20} />}
				label="Oppussing av kjøkken"
				description="Se før og etter bilder av kjøkkenet!"
			/>
			<ArticleCard
				icon={<SpoonKnifeIcon size={20} />}
				label="Oppussing av kjøkken"
				description="Se før og etter bilder av kjøkkenet!"
			/>
			<ArticleCard
				icon={<SpoonKnifeIcon size={20} />}
				label="Oppussing av kjøkken"
				description="Se før og etter bilder av kjøkkenet!"
			/>
		</ArticleCardContainer>
	);
};

export default Kitchen;
