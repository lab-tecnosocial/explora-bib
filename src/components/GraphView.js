import Box from "@mui/material/Box";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';

import Graph from "graphology";
import { SigmaContainer, ControlsContainer } from "@react-sigma/core";
import "@react-sigma/core/lib/react-sigma.min.css";
import { LayoutForceAtlas2Control } from "@react-sigma/layout-forceatlas2";




function combinations(array) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            result.push([array[i], array[j]]);
        }
    }
    return result;
}

const GraphView = ({ data }) => {
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const graph = new Graph();
    data.forEach((el, i) => {
        graph.addNode(el.id, {
            x: Math.random(),
            y: Math.random(),
            size: 5,
            label: el.titulo,
            color: '#f00'
        });
        el.temas.split(',').forEach((tema) => {
            graph.mergeNode(tema, {
                x: Math.random(),
                y: Math.random(),
                size: 10,
                label: tema,
                color: '#0f0'
            });
            graph.mergeEdge(tema, el.id, {
                color: '#00f'
            })

        });
        let comb = combinations(el.temas.split(','));
        comb.forEach((c) => {
            graph.mergeEdge(c[0], c[1], {
                color: '#00f'
            })
        });

    });

    return (
        <>
            <Box textAlign="center">
                <Button size="small" onClick={handleClickOpen}>
                    Abrir red
                </Button>
            </Box>

            <Dialog
                open={open}
                onClose={handleClose}
            >
                <DialogTitle id="alert-dialog-title">
                    Vista de red
                </DialogTitle>
                <DialogContent>

                    <SigmaContainer style={{ height: "500px", width: "500px" }} graph={graph}>
                        <ControlsContainer position={"bottom-right"}>
                            <LayoutForceAtlas2Control />
                        </ControlsContainer>
                    </SigmaContainer>

                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} autoFocus>
                        Cerrar
                    </Button>
                </DialogActions>
            </Dialog>
        </>

    );

};

export default GraphView;