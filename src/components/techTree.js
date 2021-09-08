import React, { useState,useRef, useEffect,useCallback } from "react";
import "./components.css";
import Tree from 'react-d3-tree';

const useCenteredTree = (defaultTranslate = { x: 0, y: 0 }) => {
  const [translate, setTranslate] = useState(defaultTranslate);
  const containerRef = useCallback((containerElem) => {
    if (containerElem !== null) {
      const { width, height } = containerElem.getBoundingClientRect();
      setTranslate({ x: width / 2, y: 50 });
    }
  }, []);
  return [translate, containerRef];
};

const TechTree = () => {
    const [branch, setBranch] = useState("Starter");
    const [translate, containerRef] = useCenteredTree();
    const orgChart = {
      name: 'Web Development',
      children: [
        {
          name: 'Backend',
          attributes: {
            department: 'Production',
          },
          children: [
            {
              name: 'Foreman',
              attributes: {
                department: 'Fabrication',
              },
              children: [
                {
                  name: 'Worker',
                },
              ],
            },
            {
              name: 'Foreman',
              attributes: {
                department: 'Assembly',
              },
              children: [
                {
                  name: 'Worker',
                },
              ],
            },
          ],
        },
        {
          name: 'Frontend',
          attributes: {
            department: 'Production',
          },
          children: [
            {
              name: 'CSS',
              attributes: {
                department: 'X',
              },
              children: [
                {
                  name: 'Worker',
                },
              ],
            },
            {
              name: 'HTML',


            },
          ],
        },
      ],
    };
    const treeZoomable = false;

    return (
        <div >
            <button onClick={e=>setBranch("NonStarter")}>NonStarter</button>
            <button onClick={e=>setBranch("Starter")}>Starter</button>
            <div className = "current_container" ref ={containerRef}>
            {branch === "Starter" ? (
                <div id="treeWrapper" className = "treeWrapper">
                    <Tree
                          data={orgChart}
                          translate = {translate}
                          rootNodeClassName="node__root"
                          branchNodeClassName="node__branch"
                          leafNodeClassName="node__leaf"
                          orientation = "vertical"
                          pathFunction = "elbow"
                          zoomable ={false} />
                </div>
                ) : (
                    <div>
                        Nonstarter
                    </div>
            )}
            </div>
        </div>
    );
};
export default TechTree;


