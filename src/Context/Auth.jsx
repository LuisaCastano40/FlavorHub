import { useContext, useState, createContext } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

const AuthContext = createContext();

const adminList = ['loise.0607@gmail.com', 'sperezp23@gmail.com'];