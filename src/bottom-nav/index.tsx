import { BookOpen, Calendar, Settings, Star } from "lucide-react";
import BottomNavItem from "./bottom-nav-item";

function BottomNav() {
  const bottomNavItems = [
    { label: "Home", icon: <BookOpen />, to: "/" },
    { label: "Calendar", icon: <Calendar />, to: "/calendar" },
    { label: "Favorites", icon: <Star />, to: "/favorites" },
    { label: "Settings", icon: <Settings />, to: "/settings" },
  ];

  return (
    <section className="flex items-center justify-evenly border-t border-t-gray-200 dark:border-t-gray-800">
      {bottomNavItems.map((item) => (
        <BottomNavItem
          key={item.label}
          label={item.label}
          icon={item.icon}
          to={item.to}
        />
      ))}
    </section>
  );
}

export default BottomNav;
