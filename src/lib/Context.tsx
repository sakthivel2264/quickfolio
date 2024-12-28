import React, { createContext, useContext, useState } from "react";

interface LinkProps {
  n: string; //Name
  i: string; // image
  a: string; //About
  bg: string; //Background
  fb: string; //facebook
  ig: string; //instagram
  tg: string; //telegram
  em: string; //email
  tw: string; //twitter
  lk: string; //linkedin
  yt: string; //youtube
  gt: string; //github
  wh: string; //whatsup
  ls: AdditionalLinkProps[]; // Additional Forms
}
const initialData: LinkProps = {
  n: "", //Name
  i: "", // image
  a: "", //About
  bg: "", //Background
  fb: "", //facebook
  ig: "", //instagram
  tg: "", //telegram
  em: "", //email
  tw: "", //twitter
  lk: "", //linkedin
  yt: "", //youtube
  gt: "", //github
  wh: "", //whatsup
  ls: [], //Additional Forms
};
interface DataContextType {
  // Todo: fix type props
  data: string;
  MyLink: LinkProps;
  addNewData: (linkData: AdditionalLinkProps) => void;
  setData: (val: string) => void;
  updateProfileInfo: (name: any, value: any) => void;
  selectBackground: (bgcode: string) => void;
  updateIndex: (updatedIndex: AdditionalLinkProps[]) => void;
  updateAdditionalInfo: (updatedIndex: any) => void;
  showDemo: () => void;
}

const demoData: LinkProps = {
  n: "Sakthivel Pandiyan",
  i: "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png",
  a: "I am a Full Stack Developer, I love to code and build new things. I am a quick learner and always ready to learn new technologies.",
  fb: "https://www.facebook.com/",
  tw: "https://twitter.com/",
  ig: "https://www.instagram.com/the_intense_rider/",
  tg: "https://t.me/",
  gt: "https://github.com/sakthivel2264",
  lk: "https://www.linkedin.com/in/sakthivel-pandiyan-625289270/",
  em: "sakthivelpandiyan2264@gmail.com",
  wh: "+91555555555",
  yt: "https://youtube.com/",
  bg: "#D5C5FF",
  ls: [
    {
      id: 1,
      i: "ph:laptop-duotone",
      l: "My Portfolio Website",
      u: "https://example.com",
    },
    {
      id: 2,
      i: "ant-design:robot-outlined",
      l: "My Chatbot Project",
      u: "https://example.com/chatbot",
    },
    {
      id: 3,
      i: "fluent:brain-circuit-20-regular",
      l: "My Machine Learning Project",
      u: "https://example.com/ml",
    },
    {
      id: 4,
      i: "icon-park-outline:blockchain",
      l: "My Blockchain Project",
      u: "https://example.com/blockchain",
    },
    {
      id: 5,
      i: "ph:pencil-duotone",
      l: "My Blog Posts",
      u: "",
    },
  ],
};

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider = ({ children }: { children: React.ReactNode }) => {
  const [data, setData] = useState<string>("");
  const [MyLink, setMyLink] = useState<LinkProps>(initialData);

  // UPDATE PERSONAL INFORMATION
  const updateProfileInfo = (name: any, value: any) => {
    setMyLink((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  // SELECT BACKGROUND FUNCTION
  const selectBackground = (bgcode: string) => {
    setMyLink((prevState) => ({
      ...prevState,
      bg: bgcode,
    }));
  };
  // ADDITIONAL INFO FUNCTIONS
  const updateIndex = (updatedIndex: AdditionalLinkProps[]) => {
    setMyLink((prevState) => ({
      ...prevState,
      ls: updatedIndex,
    }));
  };
  const updateAdditionalInfo = (updatedIndex: any) => {
    setMyLink((prevState) => ({
      ...prevState,
      ls: updatedIndex,
    }));
  };
  const addNewData = (linkData: AdditionalLinkProps) => {
    setMyLink((prevData) => ({
      ...prevData,
      ls: [...prevData.ls, linkData],
    }));
  };
  // SHOW DEMO FUNCTION
  const showDemo = () => {
  
    setMyLink(demoData);
  };
  return (
    <DataContext.Provider
      value={{
        data,
        addNewData,
        setData,
        showDemo,
        MyLink,
        updateProfileInfo,
        updateIndex,
        selectBackground,
        updateAdditionalInfo,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useData must be used within a DataProvider");
  }
  return context;
};
