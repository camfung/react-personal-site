import React, { useState } from 'react';
import { DndContext } from '@dnd-kit/core';

import { Droppable } from './Droppable';
import { Draggable } from './Draggable';
import { Box } from '@mui/material';

export function TestDraggable() {
    const containers = ['A', 'B', 'C'];
    const allItems = {
        '1': { id: '1', parent: 'A' },
        '2': { id: '2', parent: 'A' },
        '3': { id: '3', parent: 'A' },
        '4': { id: '4', parent: 'B' },
        '5': { id: '5', parent: 'B' },
        '6': { id: '6', parent: 'B' },
        '7': { id: '7', parent: 'C' },
        '8': { id: '8', parent: 'C' },
        '9': { id: '9', parent: 'C' }
    };

    const [containerChildren, setContainerChildren] = useState(containers.reduce((acc, id) => {
        return {
            ...acc,
            [id]: Object.values(allItems).filter(item => item.parent === id)
        };
    }, {}));

    const moveElementToNewContainer = (destinationContainerId, elementId) => {
        setContainerChildren(prevState => {
            let currentContainerId;
            // Find the current container of the element
            for (const [key, value] of Object.entries(prevState)) {
                if (value.find(el => el.id === elementId)) {
                    currentContainerId = key;
                    break;
                }
            }

            if (!currentContainerId) return prevState; // If element not found in any container, return previous state

            const fromArray = [...prevState[currentContainerId]];
            const toArray = [...prevState[destinationContainerId]];
            const elementIndex = fromArray.findIndex(el => el.id === elementId);
            if (elementIndex === -1) return prevState; // Element not found in the source container

            const [movedElement] = fromArray.splice(elementIndex, 1);
            movedElement.parent = destinationContainerId; // Update the parent property
            toArray.push(movedElement);

            return {
                ...prevState,
                [currentContainerId]: fromArray,
                [destinationContainerId]: toArray
            };
        });
    };
    console.log(containerChildren)
    const draggableMarkup = (
        <Draggable id="draggable">Drag me</Draggable>
    );

    return (
        <DndContext onDragEnd={handleDragEnd}>
            {containers.map((id) => {
                return (
                    <Droppable key={id} id={id}>
                        {containerChildren[id].length > 0 ? containerChildren[id].map((child) => {
                            return (
                                <Box display={"flex"} flexDirection={"row"}>

                                    <Draggable key={child.id} id={child.id}>
                                        {child.id}, {child.parent}
                                    </Draggable>
                                </Box>
                            );
                        }) : "empty"}
                    </Droppable>
                );
            })}

        </DndContext>
    );

    function handleDragEnd(event) {

        moveElementToNewContainer(event.over.id, event.active.id);

    }
};