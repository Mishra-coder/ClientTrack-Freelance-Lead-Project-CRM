import React, { useLayoutEffect } from 'react';
import ProjectNavigator from "../../navigation/ProjectNavigator";

export default function ProjectsScreen({ navigation }) {
  // Hide the tab header dynamically to avoid modifying TabNavigator too much
  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  return <ProjectNavigator />;
}
