import React from 'react'
import * as S from './styles'
import SideBar from '../../components/sideBar'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { UseDashboard } from './hooks/dashboardHook';
import { Toolbar } from 'primereact/toolbar';
import { Animals } from '../../models/interfaces/animals';
import { Toast } from 'primereact/toast';

const Dashboard = () => {
    const { animals, toastTopRight, header, footer, imageBodyTemplate, leftToolbarTemplate, selectedAnimal, setSelectedAnimal, statusBodyTemplate, birthDateBodyTemplate, categoryBodyTemplate } = UseDashboard()
  return (
    <S.Container>
        <SideBar/>
        <S.ContainerDash>
            <S.ContainerTableAndTitle>
                <S.TitleDash>Qual animal será adotado hoje?</S.TitleDash>
                <S.ContainerTable>
                    <Toolbar className="mb-4" left={leftToolbarTemplate} style={{marginBottom: "20px"}}></Toolbar>
                    <DataTable value={animals} header={header} scrollable scrollHeight="400px" footer={footer} tableStyle={{ minWidth: '60rem', maxHeight: "80%" }} selection={selectedAnimal} onSelectionChange={(e) => setSelectedAnimal(e.value as Animals)}>
                        <Column field="name" header="Nome"></Column>
                        <Column field="description" header="Descrição"></Column>
                        <Column field="age" header="Idade"></Column>
                        <Column header="Imagem" body={imageBodyTemplate}></Column>
                        <Column body={categoryBodyTemplate} header="Categoria"></Column>
                        <Column body={birthDateBodyTemplate} header="Data de nascimento"></Column>
                        <Column body={statusBodyTemplate} header="Status da adoção"></Column>
                        <Column selectionMode="single" exportable={false}></Column>
                    </DataTable>
                </S.ContainerTable>
            </S.ContainerTableAndTitle>
        </S.ContainerDash>
        <Toast position="top-right" ref={toastTopRight}/>
    </S.Container>
  )
}

export default Dashboard