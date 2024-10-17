import { useEffect, useState } from "react";
import { getAllAnimals, updateStatus } from "../../../api/services/animals";
import { Animals } from "../../../models/interfaces/animals";
import { Button } from "primereact/button";
import { AnimalStatus } from "../../../models/enums/Animals";
import { format, parseISO } from "date-fns";


export const UseDashboard = () => {
    const [animals, setAnimals] = useState<Animals[]>([]);
    const [selectedAnimal, setSelectedAnimal] = useState<Animals>();

    const getAnimals = async () => {
        const res = await getAllAnimals();
        setAnimals(res)
    }

    useEffect(() => {
        getAnimals()
    }, []);

    const imageBodyTemplate = (animal: Animals) => {
        return <div style={{maxHeight: "100px"}}><img src={animal.imageUrl} alt={animal.imageUrl} className="w-6rem shadow-2 border-round" style={{maxHeight: "100px"}}/></div>;
    };

    const statusBodyTemplate = (animal: Animals) => {
        return animal.status === AnimalStatus.ENABLED ? "Disponivel" : "Adotado"
    };

    const birthDateBodyTemplate = (animal: Animals) => {
        return format(parseISO(animal.birthDate), "dd/MM/yyyy")
    };

    const header = (
        <div className="flex flex-wrap align-items-center justify-content-between gap-2">
            <span className="text-xl text-900 font-bold">Animais para adoção</span>
        </div>
    );

    const updateStatusAnimal = async () => {
        console.log(selectedAnimal)
        const res = await updateStatus(selectedAnimal?.id!)
        setAnimals([res, ...animals.filter(element => element.id !== res.id)])
        setSelectedAnimal(undefined)
    }

    const leftToolbarTemplate = () => {
        return (
            <div className="flex flex-wrap gap-2">
                <Button label="Atualizar status" icon="pi pi-trash" severity="secondary" onClick={updateStatusAnimal} disabled={!selectedAnimal} />
            </div>
        );
    };

    const footer = `No total tem ${animals ? animals.length : 0} animais cadastrados.`;

    return{
        imageBodyTemplate,
        footer,
        header,
        animals,
        leftToolbarTemplate,
        selectedAnimal,
        setSelectedAnimal,
        statusBodyTemplate,
        birthDateBodyTemplate
    }
}