import type { NavItemType } from "./nav.types";

const NavItem = ({ href, label }: NavItemType) => {
	return (
		<li className="nav-li">
			<a
				href={href}
				className="nav-link"
			>
				{label}
			</a>
		</li>
	);
};

export default NavItem;
