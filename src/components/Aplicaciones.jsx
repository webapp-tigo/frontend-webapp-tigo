import React, { useState } from 'react';

export const Aplicaciones = () => {
    const [formData, setFormData] = useState({
        sistema_a: '',
        sistema_n: '',
        activ_a: '',
        activ_n: '',
        version_a: '',
        version_n: '',
        antivirus_a: '',
        antivirus_n: '',
        system_a: '',
        system_n: '',
        remote_a: '',
        remote_n: '',
        dominio_a: '',
        dominio_n: '',
        datos: '',
        tamaño1: '',
        tamaño2: '',
        tamaño3: '',
        C: '',
        D: '',
        ingresoRed: false,
        onedrive: false,
        email: false,
        voice: false,
        mapeo: false,
        impresora: false,
        vpn: false,
        usb: false,
        sap: false,
        google: false,
        sharepoint: false,
    });

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    return (
        <div className="border border-gray-300 p-6 mt-6 bg-white">
            <table className="w-full text-center">
                <thead>
                    <tr>
                        <th colSpan="1" className="text-lg font-semibold">SOFTWARE</th>
                        <th className="text-lg font-semibold">EQUIPO ANTERIOR</th>
                        <th className="text-lg font-semibold">EQUIPO NUEVO</th>
                        <th className="text-lg font-semibold">Datos, Correo e Internet</th>
                        <th className="text-lg font-semibold">Tamaño</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="text-left p-2">Sistema Operativo:</td>
                        <td>
                            <input
                                className="w-full border border-gray-400 rounded p-2"
                                type="text"
                                name="sistema_a"
                                value={formData.sistema_a}
                                onChange={handleInputChange}
                            />
                        </td>
                        <td>
                            <input
                                className="w-full border border-gray-400 rounded p-2"
                                type="text"
                                name="sistema_n"
                                value={formData.sistema_n}
                                onChange={handleInputChange}
                            />
                        </td>
                        <td>
                            <input
                                className="w-full border border-gray-400 rounded p-2"
                                type="text"
                                name="datos"
                                value={formData.datos}
                                onChange={handleInputChange}
                            />
                        </td>
                        <td>
                            <input
                                className="w-full border border-gray-400 rounded p-2"
                                type="text"
                                name="tamaño1"
                                value={formData.tamaño1}
                                onChange={handleInputChange}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className="text-left p-2">Activación (Windows / Office):</td>
                        <td>
                            <input
                                className="w-full border border-gray-400 rounded p-2"
                                type="text"
                                name="activ_a"
                                value={formData.activ_a}
                                onChange={handleInputChange}
                            />
                        </td>
                        <td>
                            <input
                                className="w-full border border-gray-400 rounded p-2"
                                type="text"
                                name="activ_n"
                                value={formData.activ_n}
                                onChange={handleInputChange}
                            />
                        </td>
                        <td className="font-semibold text-center">Tamaño Total de las Unidades de Disco</td>
                        <td className="font-semibold text-center">Tamaño</td>
                    </tr>
                    <tr>
                        <td className="text-left p-2">Versionamiento Office:</td>
                        <td>
                            <input
                                className="w-full border border-gray-400 rounded p-2"
                                type="text"
                                name="version_a"
                                value={formData.version_a}
                                onChange={handleInputChange}
                            />
                        </td>
                        <td>
                            <input
                                className="w-full border border-gray-400 rounded p-2"
                                type="text"
                                name="version_n"
                                value={formData.version_n}
                                onChange={handleInputChange}
                            />
                        </td>
                        <td>C: 
                            <input
                                className="ml-2 border border-gray-400 rounded p-2"
                                type="text"
                                name="C"
                                value={formData.C}
                                onChange={handleInputChange}
                            />
                        </td>
                        <td>
                            <input
                                className="w-full border border-gray-400 rounded p-2"
                                type="text"
                                name="tamaño2"
                                value={formData.tamaño2}
                                onChange={handleInputChange}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className="text-left p-2">Agente Antivirus:</td>
                        <td>
                            <input
                                className="w-full border border-gray-400 rounded p-2"
                                type="text"
                                name="antivirus_a"
                                value={formData.antivirus_a}
                                onChange={handleInputChange}
                            />
                        </td>
                        <td>
                            <input
                                className="w-full border border-gray-400 rounded p-2"
                                type="text"
                                name="antivirus_n"
                                value={formData.antivirus_n}
                                onChange={handleInputChange}
                            />
                        </td>
                        <td>D: 
                            <input
                                className="ml-2 border border-gray-400 rounded p-2"
                                type="text"
                                name="D"
                                value={formData.D}
                                onChange={handleInputChange}
                            />
                        </td>
                        <td>
                            <input
                                className="w-full border border-gray-400 rounded p-2"
                                type="text"
                                name="tamaño3"
                                value={formData.tamaño3}
                                onChange={handleInputChange}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className="text-left p-2">Agente System Center Configuration Manager:</td>
                        <td>
                            <input
                                className="w-full border border-gray-400 rounded p-2"
                                type="text"
                                name="system_a"
                                value={formData.system_a}
                                onChange={handleInputChange}
                            />
                        </td>
                        <td>
                            <input
                                className="w-full border border-gray-400 rounded p-2"
                                type="text"
                                name="system_n"
                                value={formData.system_n}
                                onChange={handleInputChange}
                            />
                        </td>
                        <td colSpan="2" className="font-semibold text-center">PRUEBAS ADICIONALES</td>
                    </tr>
                    <tr>
                        <td className="text-left p-2">Agente Remote Control Viewer:</td>
                        <td>
                            <input
                                className="w-full border border-gray-400 rounded p-2"
                                type="text"
                                name="remote_a"
                                value={formData.remote_a}
                                onChange={handleInputChange}
                            />
                        </td>
                        <td>
                            <input
                                className="w-full border border-gray-400 rounded p-2"
                                type="text"
                                name="remote_n"
                                value={formData.remote_n}
                                onChange={handleInputChange}
                            />
                        </td>
                        <td>
                        <b>Ingreso a la Red</b>
                            <input
                                type="checkbox"
                                name="ingresoRed"
                                checked={formData.ingresoRed}
                                onChange={handleInputChange}
                                className="ml-2"
                            />
                            <b><br />Correo Electronico</b>
                            <input
                                type="checkbox"
                                name="email"
                                checked={formData.email}
                                onChange={handleInputChange}
                                className="ml-2"
                            />
                        </td>
                        <td>
                            <b>Acceso a OneDrive</b>
                            <input
                                type="checkbox"
                                name="onedrive"
                                checked={formData.onedrive}
                                onChange={handleInputChange}
                                className="ml-2"
                            />
                            <b><br />Acceso  Voice Mail</b>
                            <input
                                type="checkbox"
                                name="voice"
                                checked={formData.voice}
                                onChange={handleInputChange}
                                className="ml-2"
                            />
                        </td>
                        </tr>
                        <tr>
                        <td className="text-left p-2">Directiva de Grupo Controlador de Dominio:</td>
                        <td>
                            <input
                                className="w-full border border-gray-400 rounded p-2"
                                type="text"
                                name="dominio_a"
                                value={formData.dominio_a}
                                onChange={handleInputChange}
                            />
                        </td>
                        <td>
                            <input
                                className="w-full border border-gray-400 rounded p-2"
                                type="text"
                                name="dominio_n"
                                value={formData.dominio_n}
                                onChange={handleInputChange}
                            />
                        </td>
                        <td>
                            <b>Unidades Mapeadas</b>
                            <input
                                type="checkbox"
                                name="mapeo"
                                checked={formData.mapeo}
                                onChange={handleInputChange}
                                className="ml-2"
                            />
                            <b><br />Acceso VPN</b>
                            <input
                                type="checkbox"
                                name="vpn"
                                checked={formData.vpn}
                                onChange={handleInputChange}
                                className="ml-2"
                            />
                            <b><br />Acceso a SAP</b>
                            <input
                                type="checkbox"
                                name="sap"
                                checked={formData.sap}
                                onChange={handleInputChange}
                                className="ml-2"
                            />
                            <b><br />Conexiones de Red</b>
                            <input
                                type="checkbox"
                                name="conexion"
                                checked={formData.conexion}
                                onChange={handleInputChange}
                                className="ml-2"
                            />
                        </td>
                        <td>
                            <b>Acceso a Impresora</b>
                            <input
                                type="checkbox"
                                name="impresora"
                                checked={formData.impresora}
                                onChange={handleInputChange}
                                className="ml-2"
                            />
                            <b><br />Puertos USB</b>
                            <input
                                type="checkbox"
                                name="usb"
                                checked={formData.usb}
                                onChange={handleInputChange}
                                className="ml-2"
                            />
                        </td>
                        
                    </tr>
                    {/* Continúa con los otros campos de la misma manera */}
                </tbody>
            </table>
        </div>
    );
};
