import { AlignCenter, AlignJustify, AlignLeft, AlignRight } from "lucide-react";
import AlignmentSettingItem from "./alignment-setting-item";
import type { TextAlign } from "../../types";
import useAppSettings from "../../app-state/hooks/useAppSettings";

type Props = {
  mode: "simple" | "longer";
};
type AlignmentSettingsList = {
  setTo: TextAlign;
  icon: React.ReactElement;
  active: boolean;
}[];

function AlignmentSettings({ mode }: Props) {
  const settingItemKey = mode === "longer" ? "articleAlign" : "quoteAlign";

  const [settings, setSettings] = useAppSettings();

  function changeAlignment(alignment: TextAlign) {
    setSettings((prev) => ({
      ...prev,
      [settingItemKey]: alignment,
    }));
  }

  const activeAlignment = settings[settingItemKey];

  const alignmentSetting: AlignmentSettingsList = [
    {
      setTo: "left",
      icon: <AlignLeft />,
      active: false,
    },
    {
      setTo: "justify",
      icon: <AlignJustify />,
      active: false,
    },
    {
      setTo: "center",
      icon: <AlignCenter />,
      active: false,
    },
    {
      setTo: "right",
      icon: <AlignRight />,
      active: false,
    },
  ];
  return (
    <>
      <div className="mt-8 flex items-center justify-evenly gap-2">
        {alignmentSetting.map((item, index) => (
          <AlignmentSettingItem
            {...item}
            key={index}
            active={item.setTo === activeAlignment}
            onClick={() => {
              changeAlignment(item.setTo);
            }}
          />
        ))}
      </div>
    </>
  );
}

export default AlignmentSettings;
