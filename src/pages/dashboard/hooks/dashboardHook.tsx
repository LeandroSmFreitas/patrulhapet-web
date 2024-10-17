import { useEffect, useRef, useState } from "react";
import { getAllAnimals, updateStatus } from "../../../api/services/animals";
import { Animals } from "../../../models/interfaces/animals";
import { Button } from "primereact/button";
import { AnimalCategory, AnimalStatus } from "../../../models/enums/Animals";
import { format, parseISO } from "date-fns";
import AuthUtils from "../../../utils/auth-utils";
import { Navigate, useNavigate } from "react-router-dom";
import { Toast, ToastMessage } from "primereact/toast";


export const UseDashboard = () => {
    const [animals, setAnimals] = useState<Animals[]>([]);
    const [selectedAnimal, setSelectedAnimal] = useState<Animals>();
    const toastTopRight = useRef(null);
    const navigate = useNavigate()

    const getAnimals = async () => {
        const res = await getAllAnimals();
        setAnimals(res)
    }

    const showMessage = (ref: React.RefObject<Toast>, severity: ToastMessage['severity']) => {
        ref.current?.show({ severity: severity, summary: "Atualização de status", detail: "status atualizado", life: 3000 });
    };

    useEffect(() => {
        !AuthUtils.isAuthenticated() && navigate("/")
        getAnimals()
    }, []);

    const imageBodyTemplate = (animal: Animals) => {
        return <div style={{maxHeight: "100px"}}><img src={animal.imageUrl} alt={animal.imageUrl} className="w-6rem shadow-2 border-round" style={{maxHeight: "100px"}}/></div>;
    };

    const statusBodyTemplate = (animal: Animals) => {
        return animal.status === AnimalStatus.ENABLED ? "Disponivel" : "Adotado"
    };

    const categoryBodyTemplate = (animal: Animals) => {
        return animal.category === AnimalCategory.DOG ? "Cachorro" : "Gato"
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
        const res = await updateStatus(selectedAnimal?.id!)
        if(res.id){
            showMessage(toastTopRight, 'success')
            setAnimals([res, ...animals.filter(element => element.id !== res.id)])
        }
        !AuthUtils.isAuthenticated() && navigate("/")
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
        birthDateBodyTemplate,
        categoryBodyTemplate,
        toastTopRight
    }
}