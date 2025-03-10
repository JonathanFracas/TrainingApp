import React, { useEffect, useState } from 'react';
import BodyPartsController from "@/Controllers/Musculation/BodyPartsController";
import bodyPartType from "@/Models/Musculation/BodyPartType";
import BodyPartType from "@/Models/Musculation/BodyPartType";

interface SubMenuProperties {
	onClick: (body_part: BodyPartType) => void;
}

export function SubMenu(props: SubMenuProperties) {
	const [bodyParts, setBodyParts] = useState<bodyPartType[]>([]);

	useEffect(() => {
		const fetchBodyParts = async () => {
			const bodyPartsData = await BodyPartsController.get();
			setBodyParts(bodyPartsData);
		};

		fetchBodyParts();
	}, []); // Le tableau vide [] signifie que cet effet ne s'exécutera qu'une seule fois après le premier rendu.

	return (
		<div className={"sub-menu"}>
			{bodyParts.map((bodyPart, index) => (
				<div key={index}>
					<button onClick={() => props.onClick(bodyPart)}>
						{bodyPart.label}
					</button>
				</div>
			))}
		</div>
	);
};

export default SubMenu;
