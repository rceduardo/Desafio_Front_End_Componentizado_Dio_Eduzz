import styled from "styled-components";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";

export const WrapperTabs = styled(Tabs)`
  font-size: 16px;
  width: 100%;
  margin-top: 16px;
`;

export const WrapperTabList = styled(TabList)`
  /* padding: 4px; */
  display: flex;
  margin-right: 20px;
  border-bottom: 1px solid #30363d;
`;
WrapperTabList.tabsRole = "TabList";

export const WrapperTab = styled(Tab)`
  padding: 8px 16px;
  user-select: none;
  cursor: pointer;
  z-index: 99999;
  background-color: "#fff";

  &:hover {
    border-bottom: 2px solid #30363d;
  }

  &.is-selected {
    border-bottom: 2px solid #F78166;
  }
`;
WrapperTab.tabsRole = "Tab";

export const WrapperTabPanel = styled(TabPanel)`
  padding: 16px;
  border: 1px solid "#ccc";
  display: none;
  margin-top: -5px;

  &.is-selected {
    display: block;
  }
`;
WrapperTabPanel.tabsRole = "TabPanel";

export const WrapperList = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`;
