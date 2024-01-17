////////////////////////////////////////////////////////////////////////////
//
// Copyright 2023 Realm Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
////////////////////////////////////////////////////////////////////////////

import React from 'react';
import {
  Button,
  FlatList,
  ListRenderItem,
  SectionList,
  Text,
  View,
} from 'react-native';
import {useTaskManager} from '../hooks/useTaskManager';
import {Task} from '../models/Task';

const renderItem: ListRenderItem<Task> = ({item}) => (
  <Text>{item.description}</Text>
);

/**
 * Displays the list of tasks and a form to add new tasks.
 */
export function TaskScreen() {
  const {tasks, addTask} = useTaskManager();

  return (
    <View style={{backgroundColor: 'black', flex: 1}}>
      <Button
        title="Add task"
        onPress={() => {
          addTask(`Task ${tasks.length + 1}`);
        }}
      />

      <Text>SectionList</Text>

      {/* error */}
      <SectionList sections={[{data: tasks}]} renderItem={renderItem} />

      <Text>FlatList</Text>

      {/* OK */}
      <FlatList data={tasks} renderItem={renderItem} />
    </View>
  );
}
