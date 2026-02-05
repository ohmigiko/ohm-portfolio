import type { NavItemType } from "./nav.types";
import NavItem from "./NavItem";

const Navigation = () => {
	const navItems: NavItemType[] = [
		{ label: "Home", href: "#home" },
		{ label: "About", href: "#about" },
		{ label: "Work", href: "#work" },
		{ label: "Contact", href: "#contact" },
	];

	return (
		<ul className="nav-ul">
			{navItems.map((item) => (
				<NavItem
					key={item.href}
					{...item}
				/>
			))}
		</ul>
	);
};

export default Navigation;
