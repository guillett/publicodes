import Explanation from '../Explanation'
import { Mecanism } from './common'

export default function UnePossibilitéMecanism({ explanation }) {
	return (
		<Mecanism name="une possibilité parmi" value={undefined}>
			<ul>
				{explanation.map((node, i) => (
					<li key={i}>
						<Explanation node={node} />
					</li>
				))}
			</ul>
		</Mecanism>
	)
}
